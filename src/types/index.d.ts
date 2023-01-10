export { };

declare global {
  interface Window {
    locale: string;
    market: string;
    InitiateExperience: () => void;
    OpenLacostePDP: (hotspot: any) => void;
    updateScene: (scene: string) => void;
    GotoScene: (scene: string) => void;
    OpenUNDW3Popup: () => void;
    XYZ: () => void;
    EnterTennisRoom: () => void;
    OpenParticipationPopUp: () => void;
    OpenLeaderboard: () => void;
    OpenParticipationSuccessPopUp: () => void;
  }
}
