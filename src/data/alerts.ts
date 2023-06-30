import { Alert } from 'react-native';
export function locationPermissionAlert() {
  const alertMessage =
    'Location access is blocked. Using default location (Dubai).';
  const tip =
    'If you want to change the location, please go to your device settings, navigate to App permissions or Privacy settings, and allow location access for this app.';
  const fullMessage = `${alertMessage}\n\n${tip}`;
  Alert.alert(
    'Permission Denied',
    fullMessage,
    [
      {
        text: 'OK',
      },
    ],
    {
      cancelable: true,
      userInterfaceStyle: 'dark',
    }
  );
}
