//// Written By GerldIn2016 \\--
import { ReplicatedStorage } from '@rbxts/services'
import { Uniforms } from 'shared/CustomisableConfig'
import { MainGUI, DataBaseType } from './typeDeclerations'

export function BuildUniform(GUI: MainGUI): void {
    let grid = GUI.MovingFrame.Loadout.Grid.Uniform.Items.Padding

    //Clear all children which should be there
    grid.GetChildren().forEach(e => {
        if (!e.IsA("UIGridLayout")) {
            e.Destroy()
        }
    })

    Uniforms().forEach(element => {
        let childClone = ReplicatedStorage.Assets.GUI.ItemFrame.Clone()
        childClone.Parent = grid
        childClone.ViewportFrame.Uniform.Shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" + element.Shirt
        childClone.ViewportFrame.Uniform.Pants.PantsTemplate = "http://www.roblox.com/asset/?id=" + element.pants

        childClone.TextLabel.Text = element.name
        childClone.Level.Text = "LEVEL " + element.level + "+"

        childClone.Name = `${element.UUID}`


    });

    ReplicatedStorage.Events.ItemOwnsership.OnClientEvent.Connect((items, types) => {
        if (!(typeIs(types, "string"))) return;
        if (types === "Uniforms") {
            let dataIn = <DataBaseType[]>items
            dataIn.forEach(element => {
                if (element.owned === false) return;
                let ITEM = grid.FindFirstChild(element.UUID)
                let TextLabel = ITEM?.FindFirstChild("TextLabel")
                let LevelReq = ITEM?.FindFirstChild("Level")
                let Image = ITEM?.FindFirstChild("ViewportFrame")
                if (TextLabel && TextLabel.IsA("TextLabel") && LevelReq && Image && LevelReq.IsA("TextLabel") && Image.IsA("ViewportFrame")) {
                    TextLabel.TextTransparency = 0
                    LevelReq.TextTransparency = 0
                    Image.ImageTransparency = 0
                }
            });
        }
    })
}