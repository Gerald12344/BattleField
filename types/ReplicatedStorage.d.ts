interface ReplicatedStorage extends Instance {
	Modules: Folder & {
		module: ModuleScript;
		CustomisableConfig: ModuleScript;
	};
	Assets: Folder & {
		Helmets: Folder & {
			ArmyMP: Model & {
				Union: UnionOperation;
				P: UnionOperation;
				Bales: UnionOperation;
				M: UnionOperation;
				Middle: Part & {
					Mesh: SpecialMesh;
				};
				Linen: MeshPart;
			};
			M1Helmet: Model & {
				Helmet: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
				Buckle2: MeshPart;
				["Meshes/StrapHelm"]: MeshPart;
				Bales: MeshPart;
				ChinStrap: MeshPart;
				Liner: MeshPart;
				Middle: Part & {
					Mesh: SpecialMesh;
				};
				Buckle: MeshPart;
			};
		};
		GUI: Folder & {
			GamepassIcon: ImageButton & {
				UICorner: UICorner;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
			};
			ItemFrame: TextButton & {
				TextLabel: TextLabel;
				ViewportManager: LocalScript;
				UICorner: UICorner;
				Level: TextLabel & {
					UICorner: UICorner;
				};
				ViewportFrame: ViewportFrame & {
					UICorner: UICorner;
					Uniform: Model & {
						["Left Leg"]: Part;
						Humanoid: Humanoid;
						["Right Leg"]: Part;
						Head: Part & {
							Mesh: SpecialMesh;
							Face: Decal;
						};
						Torso: Part & {
							["Left Shoulder"]: Motor6D;
							["Right Shoulder"]: Motor6D;
							Neck: Motor6D;
							["Right Hip"]: Motor6D;
							["Left Hip"]: Motor6D;
						};
						HumanoidRootPart: Part & {
							["Root Hip"]: Motor6D;
						};
						["Right Arm"]: Part;
						["Left Arm"]: Part;
						Pants: Pants;
						["Body Colors"]: BodyColors;
						Shirt: Shirt;
					};
				};
				TextButton: TextButton;
			};
		};
	};
	Events: Folder & {
		ItemOwnsership: RemoteEvent;
		PromptPurchase: RemoteEvent;
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			datastore2: Folder & {
				src: ModuleScript & {
					Verifier: ModuleScript;
					Promise: ModuleScript;
					SavingMethods: ModuleScript & {
						OrderedBackups: ModuleScript;
						Standard: ModuleScript;
					};
					Settings: ModuleScript;
					TableUtil: ModuleScript;
					Constants: ModuleScript;
				};
			};
			services: ModuleScript;
			t: Folder & {
				lib: Folder & {
					ts: ModuleScript;
				};
			};
			["compiler-types"]: Folder & {
				types: Folder;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
		};
	};
}
