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
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 1 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.ArmyMP, UUID: 2 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 3 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 4 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 5 },
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
