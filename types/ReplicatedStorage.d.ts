interface ReplicatedStorage extends Instance {
	Modules: Folder & {
		module: ModuleScript;
		CustomisableConfig: ModuleScript;
	};
	Assets: Folder & {
		GUI: Folder & {
			GamepassIcon: ImageButton & {
				UICorner: UICorner;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
			};
			ItemFrame: TextButton & {
				TextLabel: TextLabel;
				ViewportFrame: ViewportFrame & {
					UICorner: UICorner;
					Uniform: Model & {
						["Left Leg"]: Part;
						Humanoid: Humanoid;
						["Right Leg"]: Part;
						["Body Colors"]: BodyColors;
						["Right Arm"]: Part;
						["Left Arm"]: Part;
						Pants: Pants;
						Shirt: Shirt;
						Torso: Part;
					};
				};
				UICorner: UICorner;
				Level: TextLabel & {
					UICorner: UICorner;
				};
				TextButton: TextButton;
				LocalScript: LocalScript;
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
