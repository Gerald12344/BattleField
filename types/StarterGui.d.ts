interface StarterGui extends BasePlayerGui {
	LoadingGUI: ScreenGui & {
		LocalScript: LocalScript;
		ViewportFrame: ViewportFrame & {
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
	};
	ScreenGui: ScreenGui & {
		Frame: Frame & {
			["Weapon Safety"]: VideoFrame;
			["Connecting Screen"]: VideoFrame;
			VideoFrame: VideoFrame;
		};
	};
	MainGUI: ScreenGui & {
		LocalScript: LocalScript;
		Frame: Frame & {
			xDevs: ImageButton & {
				UIAspectRatioConstraint: UIAspectRatioConstraint;
			};
			Bar: Frame & {
				UICorner: UICorner;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
			};
			List: Frame & {
				Shop: ImageButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Home: ImageButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				UIListLayout: UIListLayout;
				KLoadout: ImageButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				LInfo: ImageButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				XSettings: ImageButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
			};
		};
		MovingFrame: Frame & {
			Shop: Frame & {
				Gamepass: LocalScript;
				Passes: Frame & {
					Gamepasses: TextLabel;
					Frame: Frame;
					ScrollingFrame: ScrollingFrame & {
						UIGridLayout: UIGridLayout;
					};
					UICorner: UICorner;
				};
				Title: Frame & {
					UICorner: UICorner;
					["Information!"]: TextLabel;
				};
				Desc: Frame & {
					Purchase: TextButton & {
						UICorner: UICorner;
						GamePassID: IntValue;
					};
					TItle: TextLabel;
					Description: TextLabel;
					Gamepasses: TextLabel;
					Frame: Frame;
					UICorner: UICorner;
					ImageLabel: ImageLabel & {
						UICorner: UICorner;
						UIAspectRatioConstraint: UIAspectRatioConstraint;
					};
				};
			};
			Info: Frame & {
				Title: Frame & {
					UICorner: UICorner;
					["Information!"]: TextLabel;
				};
				Body: Frame & {
					UICorner: UICorner;
					UIListLayout: UIListLayout;
				};
			};
			Home: Frame & {
				Stats: Frame & {
					OuterBar: Frame & {
						TextLabel: TextLabel;
						Frame: Frame;
					};
					Frame: Frame & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
					};
					StatHandler: LocalScript;
					Rank: TextLabel;
					UICorner: UICorner;
					Level: TextLabel;
					Names: TextLabel;
					ImageLabel: ImageLabel & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
					};
				};
				News: Frame & {
					Version: TextLabel;
					UICorner: UICorner;
					Frame: Frame;
					ScrollingFrame: ScrollingFrame & {
						UIListLayout: UIListLayout;
					};
					News: TextLabel;
				};
				bklogo2: ImageLabel & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				ImageLabel: ImageLabel & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
			};
			Loadout: Frame & {
				Loadout: Frame & {
					UICorner: UICorner;
					News: TextLabel;
					ScrollingFrame: ScrollingFrame;
					Frame: Frame;
				};
				Title: Frame & {
					TextLabel: TextLabel;
					UICorner: UICorner;
				};
				Grid: Frame & {
					Uniform: Frame & {
						TextButton: TextButton & {
							LocalScript: LocalScript;
						};
						Items: ScrollingFrame & {
							Padding: Frame & {
								UIGridLayout: UIGridLayout & {
									UIAspectRatioConstraint: UIAspectRatioConstraint;
								};
							};
						};
						TextLabel: TextLabel;
						Back: TextButton & {
							LocalScript: LocalScript;
						};
					};
					Perk: Frame & {
						Items: ScrollingFrame;
						TextButton: TextButton & {
							LocalScript: LocalScript;
						};
						TextLabel: TextLabel;
						Back: TextButton & {
							LocalScript: LocalScript;
						};
					};
					Primary: Frame & {
						Items: ScrollingFrame;
						TextButton: TextButton & {
							LocalScript: LocalScript;
						};
						TextLabel: TextLabel;
						Back: TextButton & {
							LocalScript: LocalScript;
						};
					};
					zEquipment: Frame & {
						Items: ScrollingFrame;
						TextButton: TextButton & {
							LocalScript: LocalScript;
						};
						TextLabel: TextLabel;
						Back: TextButton & {
							LocalScript: LocalScript;
						};
					};
					Secondary: Frame & {
						TextButton: TextButton & {
							LocalScript: LocalScript;
						};
						Items: ScrollingFrame;
						TextLabel: TextLabel;
						Back: TextButton & {
							LocalScript: LocalScript;
						};
					};
				};
			};
			Settings: Frame & {
				Title: Frame & {
					UICorner: UICorner;
					["Information!"]: TextLabel;
				};
			};
		};
		Deploy: TextButton;
	};
}
