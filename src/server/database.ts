//// Written By GerldIn2016 \\--

import DataStore2 from "@rbxts/datastore2";
import { Players, ReplicatedStorage } from "@rbxts/services";
import { getSettings } from "shared/CustomisableConfig";

DataStore2.Combine("DATA", "OwnedItems")

export function CheckOwnerShipOfItems(player: Player) {
    let OwnedItems = DataStore2("OwnedItems", player)

    //ReplicatedStorage.Events.ItemOwnsership.FireClient(player, [{ UUID: "1", owned: true }], "OwnedItems")

    let callRemote = (value: unknown, data: String): void => {
        ReplicatedStorage.Events.ItemOwnsership.FireClient(player, value, data)
    }

    callRemote(OwnedItems.Get([]), "OwnedItems")

    OwnedItems.OnUpdate((e) => { callRemote(e, "OwnedItems") })
}
export function CheckOwnerShip() {
    let remoteFunc = ReplicatedStorage.FindFirstChild("Events")?.FindFirstChild("CheckOwnership")
    if (!(remoteFunc && remoteFunc.IsA("RemoteFunction"))) { return }
    remoteFunc.OnServerInvoke = (plr, uuid) => {
        let OwnedItems = DataStore2("OwnedItems", plr)
        let data = OwnedItems.Get([])
        let has = false
        let newdata = <number[]>data
        print(newdata)
        print(uuid)
        if (!(typeIs(uuid, "number"))) { return }
        newdata.forEach(element => {
            print(`${element} - ${uuid}`)
            if (element === uuid) {
                has = true
            }
        });

        let settings = getSettings("all")
        settings.forEach((element) => {
            if (element.UUID === uuid && element.group !== -1 && element.group && element.rank) {
                if (plr.GetRankInGroup(element.group) >= element.rank) {
                    has = true
                }
            }
        })

        return has
    }
}