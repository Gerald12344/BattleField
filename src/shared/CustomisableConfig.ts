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

        { name: "Basic Combat Uniform", Shirt: 6826400344, pants: 6826417710, price: 0, level: 0, group: 10578961, rank: 1, Cover: CoverStore.M1Helmet, Gear: GearStore.BasicWebbing, UUID: 1 },
        { name: "[LVL 5+] Combat Uniform", Shirt: 6826399535, pants: 6826417710, price: 0, level: 5, group: 10578961, rank: 1, Cover: CoverStore.M1Helmet, Gear: GearStore.NCOWebbing, UUID: 2 },
        { name: "[LVL 10+] Combat Uniform", Shirt: 6826399535, pants: 6826417710, price: 0, level: 10, group: 10578961, rank: 1, Cover: CoverStore.ArmyFieldCap, Gear: GearStore.BasicWebbing, UUID: 3 },
        { name: "[LVL 20+] Rugged Combats", Shirt: 6850376367, pants: 6826417710, price: 0, level: 20, group: 10578961, rank: 1, Cover: CoverStore.M1Helmet, Gear: GearStore.ASFWebbing, UUID: 4 },
        { name: "Military Police Uniform", Shirt: 6826402010, pants: 6826417710, price: 0, level: 0, group: 10652286, rank: 1, Cover: CoverStore.ArmyMP, Gear: GearStore.MPWebbing, UUID: 5 },
        { name: "Special Forces Utilities", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10716727, rank: 1, Cover: CoverStore.SFBeret, Gear: GearStore.NCOWebbing, UUID: 6 },
        { name: "Special Forces Officer Utilities", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10716727, rank: 1, Cover: CoverStore.SFBeret, Gear: GearStore.OfficerWebbing, UUID: 7 },
        { name: "Special Forces Combats", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10716727, rank: 1, Cover: CoverStore.ASFBoonie, Gear: GearStore.ASFWebbing, UUID: 8 },
        { name: "General Grade Utilities", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10578961, rank: 70, Cover: CoverStore.GeneralCap, Gear: GearStore.OfficerWebbing, UUID: 9 },
        { name: "Rangers Combats", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10609131, rank: 1, Cover: CoverStore.M1Helmet, Gear: GearStore.RangersVest, UUID: 10 },
        { name: "2nd Heli Detachment Uniform", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10629861, rank: 1, Cover: CoverStore.PilotHelm, Gear: GearStore.BasicWebbing, UUID: 11 },
        { name: "MEDEVAC Uniform", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10629871, rank: 1, Cover: CoverStore.MedevacHelm, Gear: GearStore.BasicWebbing, UUID: 12 },
        { name: "1CAV Combats", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10609092, rank: 1, Cover: CoverStore.CavHelm, Gear: GearStore.SMG, UUID: 13 },
        { name: "Armored Combats", Shirt: 6826400344, pants: 6826417710, price: 0, level: 0, group: 10609100, rank: 1, Cover: CoverStore.M1Tanker, Gear: GearStore.BeltV2, UUID: 14 },
        { name: "7ID Combats", Shirt: 6826399535, pants: 6826417710, price: 0, level: 0, group: 10579771, rank: 1, Cover: CoverStore.M1Helmet, Gear: GearStore.ASFWebbing, UUID: 15 },
    ]
    let Primary: SettingsType = [
        { name: "Ranger Pew Pew Gun", price: 100, level: 5, Tool: WeaponStore.M1A1, UUID: 9 },
    ]

    let Secondary: SettingsType = [
        { name: "Ranger Pew Pew Pistol", price: 100, level: 5, Tool: WeaponStore.M1911, UUID: 10 },
    ]

    return settings === "Uniforms" ? uniforms : settings === "Primary" ? Primary : settings === "Secondary" ? Secondary : settings === "all" ? [...uniforms, ...Primary, ...Secondary] : Secondary
}
