//// Written By GerldIn2016 \\--
import { ReplicatedStorage } from '@rbxts/services'
import { getSettings } from 'shared/CustomisableConfig'
import { DataBaseType, GridElement } from './typeDeclerations'
import { SetupClickHandlerForLoadout } from './ClickLoadoutItem'

export function BuildDisplay(Frame: GridElement, typeOfElement: string): void {
    let grid = Frame.Items.Padding

    //Clear all children which should be there
    grid.GetChildren().forEach(e => {
        if (!e.IsA("UIGridLayout")) {
            e.Destroy()
        }
    })

    let outputArray = getSettings(typeOfElement)
    outputArray.forEach(element => {
        let childClone
        if (typeOfElement === "Uniforms" && element.Cover !== undefined) {
            childClone = ReplicatedStorage.Assets.GUI.ItemFrame.Clone()
            childClone.Parent = grid
            childClone.ViewportFrame.Uniform.Shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" + element.Shirt
            childClone.ViewportFrame.Uniform.Pants.PantsTemplate = "http://www.roblox.com/asset/?id=" + element.pants


            let Cover = element.Cover.Clone()
            Cover.SetPrimaryPartCFrame(childClone.ViewportFrame.Uniform.Head.CFrame)
            Cover.Parent = childClone.ViewportFrame.Uniform


            childClone.TextLabel.Text = element.name
            childClone.Level.Text = "LEVEL " + element.level + "+"

            childClone.Name = `${element.UUID}`
        }
        else if ((typeOfElement === "Primary" || typeOfElement === "Secondary") && element.Tool !== undefined) {
            childClone = ReplicatedStorage.Assets.GUI.ToolFrame.Clone()
            childClone.Parent = grid


            let Weapon = element.Tool.Clone()
            Weapon.SetPrimaryPartCFrame((new CFrame(0, 0, 0)).mul(CFrame.Angles(0, math.rad(0), 0)).Inverse())
            Weapon.Parent = childClone.ViewportFrame
            Weapon.Name = "Tool"


            childClone.TextLabel.Text = element.name
            childClone.Level.Text = "LEVEL " + element.level + "+"

            childClone.Name = `${element.UUID}`
        } else {
            childClone = ReplicatedStorage.Assets.GUI.ToolFrame.Clone()
            childClone.Parent = grid
            childClone.TextLabel.Text = element.name
            childClone.Level.Text = "LEVEL " + element.level + "+"

            childClone.Name = `${element.UUID}`
        }

        childClone.MouseButton1Down.Connect(() => {

            SetupClickHandlerForLoadout(element, Frame, typeOfElement)
        })

    });

    ReplicatedStorage.Events.ItemOwnsership.OnClientEvent.Connect((items, types) => {
        print("herereerr")
        print(types)
        print(typeOfElement)
        if (!(typeIs(types, "string"))) return;
        if (types === typeOfElement) {
            let dataIn = <DataBaseType[]>items
            dataIn.forEach(element => {
                if (element.owned === false) return;
                print(element.UUID)
                let ITEM = grid.FindFirstChild(element.UUID)
                let TextLabel = ITEM?.FindFirstChild("TextLabel")
                let LevelReq = ITEM?.FindFirstChild("Level")
                let Image = ITEM?.FindFirstChild("ViewportFrame")
                let PadlocItem = ITEM?.FindFirstChild("Icon")
                if (TextLabel && TextLabel.IsA("TextLabel") && LevelReq && Image && LevelReq.IsA("TextLabel") && Image.IsA("ViewportFrame") && PadlocItem && PadlocItem.IsA("ImageLabel")) {
                    TextLabel.TextTransparency = 0
                    LevelReq.TextTransparency = 0
                    Image.ImageTransparency = 0
                    PadlocItem.Visible = false
                }
            });
        }
    })
}