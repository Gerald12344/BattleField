//// Written By GerldIn2016 \\--

import { Players } from "@rbxts/services";
import { CheckOwnerShipOfItems } from "./database";
import { purchaseGamepassHandler } from "./gamepassHandler";

//Start running misc scripts
purchaseGamepassHandler()

Players.PlayerAdded.Connect((plr) => {

    //Check OwnerShip of items
    CheckOwnerShipOfItems(plr)
})