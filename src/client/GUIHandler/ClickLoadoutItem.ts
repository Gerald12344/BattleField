//// Written By GerldIn2016 \\--
import { ReplicatedStorage } from '@rbxts/services'
import { SettingsTypeObject } from 'shared/sharedTypes'
import { GridElement } from './typeDeclerations'

export function SetupClickHandlerForLoadout(item: SettingsTypeObject, GUIFrame: GridElement, typeInput: String): void {
    let frame = GUIFrame.ViewportFrame
    let owned = ReplicatedStorage.Events.CheckOwnership.InvokeServer(item.UUID)
    if (!typeIs(owned, 'boolean')) { return }
    print(owned)
    if (!owned) { return }
    if (typeInput === "Uniforms") {
        let hum = frame.FindFirstChildOfClass("Model")
        let shirt = hum?.FindFirstChildOfClass("Shirt")
        let pants = hum?.FindFirstChildOfClass("Pants")
        let head = hum?.FindFirstChild("Head")
        if (shirt && pants && hum && head && head.IsA("Part")) {
            shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" + item.Shirt
            pants.PantsTemplate = "http://www.roblox.com/asset/?id=" + item.pants
            let coverItem = item.Cover
            if (!coverItem) { return }
            let cover = coverItem.Clone()
            hum.GetChildren().forEach((e) => {
                if (e.IsA("Model")) {
                    e.Destroy()
                }
            })
            cover.Parent = hum
            let middle = cover.FindFirstChild("Middle")
            if (middle && middle.IsA("BasePart")) {
                cover.PrimaryPart = middle
                cover.SetPrimaryPartCFrame(head.CFrame)
            }
        }

    }

}