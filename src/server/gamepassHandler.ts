//// Written By GerldIn2016 \\--

import { MarketplaceService, ReplicatedStorage } from "@rbxts/services";

export function purchaseGamepassHandler():void {
    let RemoteEvent = ReplicatedStorage.FindFirstChild("Events")?.FindFirstChild("PromptPurchase")
    if(!(RemoteEvent && RemoteEvent.IsA("RemoteEvent"))){return}
    RemoteEvent.OnServerEvent.Connect((plr, id) => {
        if(typeIs(id, "number")){
            MarketplaceService.PromptGamePassPurchase(plr, id) 
        }
    })
}