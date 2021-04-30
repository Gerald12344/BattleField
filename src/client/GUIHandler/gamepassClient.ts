//// Written By GerldIn2016 \\--

import { MarketplaceService, ReplicatedStorage } from "@rbxts/services"
import { GamepassIds } from "shared/CustomisableConfig";
import { MainGUI } from './typeDeclerations'
let UniformIds = GamepassIds()

export function GamepassHandler(shopFrame: Frame, GUI: MainGUI) {
    let Assets = ReplicatedStorage.Assets
    if (!(Assets && Assets.IsA("Folder"))) return;
    let desc = GUI.MovingFrame.Shop.Desc

    UniformIds.forEach(e => {

        let element = Assets.GUI.GamepassIcon.Clone()
        element.Image = "rbxassetid://" + MarketplaceService.GetProductInfo(e, 2).IconImageAssetId
        element.Parent = GUI.MovingFrame.Shop.Passes.ScrollingFrame



        element.MouseButton1Down.Connect(() => {
            desc.Visible = true
            let data = MarketplaceService.GetProductInfo(e, 2)
            desc.TItle.Text = data.Name
            desc.Description.Text = data.Description
            desc.Purchase.Text = "Purchase " + data.PriceInRobux + "$"
            desc.ImageLabel.Image = "rbxassetid://" + data.IconImageAssetId
            desc.Purchase.GamePassID.Value = e
        });
    });

    desc.Purchase.MouseButton1Down.Connect(() => {
        ReplicatedStorage.Events.PromptPurchase.FireServer(desc.Purchase.GamePassID.Value)
    });
}