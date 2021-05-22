//// Written By GerldIn2016 \\--

import { Players } from "@rbxts/services";
import { CheckOwnerShip, CheckOwnerShipOfItems } from "./database";
import { purchaseGamepassHandler } from "./gamepassHandler";

//Start running misc scripts
purchaseGamepassHandler()
CheckOwnerShip()

Players.PlayerAdded.Connect((plr) => {

    //Check OwnerShip of items
    CheckOwnerShipOfItems(plr)
})