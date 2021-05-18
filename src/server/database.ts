//// Written By GerldIn2016 \\--

import DataStore2 from "@rbxts/datastore2";
import { ReplicatedStorage } from "@rbxts/services";

DataStore2.Combine("DATA", "Uniforms")

export function CheckOwnerShipOfItems(player: Player) {
    let uniforms = DataStore2("Uniforms", player)

    ReplicatedStorage.Events.ItemOwnsership.FireClient(player, [{ UUID: "1", owned: true }], "Uniforms")

    let callRemote = (value: unknown, data: String): void => {
        ReplicatedStorage.Events.ItemOwnsership.FireClient(player, value, data)
    }

    callRemote(uniforms.Get([]), "Uniforms")

    uniforms.OnUpdate((e) => { callRemote(e, "Uniforms") })
}