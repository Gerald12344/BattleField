//// Written By GerldIn2016 \\--
import { SettingsTypeObject } from 'shared/sharedTypes'
import { GridElement } from './typeDeclerations'

export function SetupClickHandlerForLoadout(item: SettingsTypeObject, GUIFrame: GridElement, typeInput: String): void {
    print('here')
    let frame = GUIFrame.ViewportFrame
    if (typeInput === "Uniforms") {
        let hum = frame.FindFirstChildOfClass("Model")
        let shirt = hum?.FindFirstAncestorOfClass("Shirt")
        let pants = hum?.FindFirstAncestorOfClass("Pants")
        let head = hum?.FindFirstChild("Head")
        if (shirt && pants && hum && head && head.IsA("Part")) {
            shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" + item.Shirt
            pants.PantsTemplate = "http://www.roblox.com/asset/?id=" + item.pants
            let cover = item.Cover?.Clone()
            if (!cover) { return }
            cover.Parent = hum
            hum.GetChildren().forEach((e) => {
                if (e.IsA("Model")) {
                    e.Destroy()
                }
            })
            cover.SetPrimaryPartCFrame(head.CFrame)
        }

    }

}