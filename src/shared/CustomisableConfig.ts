//// Written By GerldIn2016 \\--

import { ReplicatedStorage } from "@rbxts/services"
import { SettingsType } from "./sharedTypes"
let CoverStore = ReplicatedStorage.Assets.Helmets
let WeaponStore = ReplicatedStorage.Assets.Weaponary

export function GamepassIds(): number[] {
    return [17061614, 17061614, 10251454]
}

export function getSettings(settings: String): SettingsType {
    let uniforms: SettingsType = [
        { name: "Basic Combat Uniform", Shirt: 6826400344, pants: 6826417710, price: 0, level: 0, group: 999, rank: 999, Cover: CoverStore.M1Helmet, UUID: 1 },
        { name: "[LVL 5+] Combat Uniform", Shirt: 6826399535, pants: 6826417710, price: 0, level: 5, group: 999, rank: 999, Cover: CoverStore.M1Helmet, UUID: 1 },
        { name: "[LVL 10+] Combat Uniform", Shirt: 6826399535, pants: 6826417710, price: 0, level: 10, group: 999, rank: 999, Cover: CoverStore.ArmyFieldCap, UUID: 1 },
        { name: "Military Police Uniform", Shirt: 6826402010, pants: 6826417710, price: 0, level: 0, Cover: CoverStore.ArmyMP, UUID: 2 },
        { name: "Special Forces Utilities", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, Cover: CoverStore.SFBeret, UUID: 3 },
        { name: "Special Forces Combats", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, Cover: CoverStore.ASFBoonie, UUID: 4 },
        { name: "General Grade Utilities", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, Cover: CoverStore.GeneralCap, UUID: 5 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 6 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 7 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 8 },
    ]
    let Primary: SettingsType = [
        { name: "Ranger Pew Pew Gun", price: 100, level: 5, Tool: WeaponStore.M1A1, UUID: 9 },
    ]

    let Secondary: SettingsType = [
        { name: "Ranger Pew Pew Pistol", price: 100, level: 5, Tool: WeaponStore.M1911, UUID: 10 },
    ]

    return settings === "Uniforms" ? uniforms : settings === "Primary" ? Primary : settings === "Secondary" ? Secondary : Secondary
}
