//// Written By GerldIn2016 \\--

import { ReplicatedStorage } from "@rbxts/services"

export function GamepassIds(): number[] {
    return [17061614, 17061614, 10251454]
}

export function Uniforms(): { name: string, Shirt: number, pants: number, price: number, level: number, UUID: number, Cover: Model }[] {
    let CoverStore = ReplicatedStorage.Assets.Helmets
    let uniforms = [
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 1 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.ArmyMP, UUID: 2 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 3 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 4 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 5 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 6 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 7 },
        { name: "Basic Combats", Shirt: 6192829155, pants: 6120871264, price: 100, level: 5, Cover: CoverStore.M1Helmet, UUID: 8 },
    ]
    return uniforms
}