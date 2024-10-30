export const VideoConferenceStyles = `
  .camera-list{
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  
  .sv-meeting-spectator-list {
    display: none;
  }
  .meeting-room__cameras__button .sv-icon-grid_md{
    display:none !important;
 }

 .meeting-container:has(.meeting-settings) {
    background-color: rgba(0, 0, 0, 0.85);
 }
`;

export const connectionStatus = {
  NOT_AVAILABLE: 0, // Indicates that the audio/video service is disconnected.
  GOOD: 1, // Represents good connection quality, ensuring a stable and reliable audio/video experience.
  BAD: 2, // Indicates a bad connection quality, suggested to turn off video to enhance experience.
  POOR: 3, // Signifies poor connection due to network or PC specs.
  DISCONNECTED: 4, // Indicates that audio/video transmission has been interrupted for at least 10 seconds.
  RECONNECTING: 5, // Occurs during a reconnection process after a loss of connection.
  LOST_CONNECTION: 6, // Indicates a complete loss of connection to the audio/video service.
};
