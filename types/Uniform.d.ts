type Uniform = Frame & {
	Items: ScrollingFrame & {
		Padding: Frame & {
			UIGridLayout: UIGridLayout & {
				UIAspectRatioConstraint: UIAspectRatioConstraint;
			};
		};
	};
	TextLabel: TextLabel;
	ViewportManager: LocalScript;
	TextButton: TextButton & {
		LocalScript: LocalScript;
	};
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
	Back: TextButton & {
		LocalScript: LocalScript;
	};
}
