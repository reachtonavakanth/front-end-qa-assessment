export interface InstructionsProps {
  instructionsFirst: boolean;
  active: boolean;
  setActive: () => void;
}

export interface MoreInfoProps {
  active: boolean;
  setActive: () => void;
}

export interface LayoutProps {
  closeAll: () => void;
  children?: React.ReactNode;
  toggleInstructions: () => void;
  audioActive: boolean;
  setAudioActive: () => void;
  activeScene: string;
  setActiveScene: (scene: string) => void;
  closeSecondRoomPopUp: () => void;
  openLeaderboard: () => void;
}

export interface NFTProps {
  active: boolean;
  setActive: () => void;
  closeAll: () => void;
  setActiveScene: (scene: string) => void;
}
export interface MenuOptionItem {
  scene: string;
  heading: string;
  subHeading: string;
  handler: () => void;
}

export interface LoadingProps {
  setLoadUI: () => void;
}

export interface DotsMenuItemProps {
  disabled?: boolean;
  active: boolean;
  heading: string;
  subHeading: string;
  closeMenuOnClick?: () => void;
}

export interface WelcomeCircleProps {
  active: boolean;
  setActive: () => void;
}
export interface ParticipationPageProps {
  active: boolean;
  setActive: () => void;
  openParticipationPageSuccess: () => void;
}