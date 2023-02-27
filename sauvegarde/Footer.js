// Dépendances
import { StyleSheet, Text, View, Platform } from 'react-native';

// Utilitaires
import config from './utils/config';

// Footer
export default function Footer() {
	return (
		<View style={[styles.footer]}>
			<Text style={styles.h2}>By Alain GUILLON</Text>
			{/* PLATEFORME */}
			<View style={[styles.row, styles.justifyBetween, { paddingHorizontal: 16 }]}>
				{/* PLATEFORME */}
				<Text style={[styles.strong, styles.textDanger]}>
					Plateforme:{'   '}
					{Platform.OS == 'android' && (
						<Text style={[styles.em, styles.textLight]}>Androïde</Text>
					)}
					{Platform.OS == 'ios' && (
						<Text style={[styles.em, styles.textLight]}>IOS</Text>
					)}
					{Platform.OS == 'macos' && (
						<Text style={[styles.em, styles.textLight]}>MacOS</Text>
					)}
					{Platform.OS == 'web' && (
						<Text style={[styles.em, styles.textLight]}>Web</Text>
					)}
					{Platform.OS == 'windows' && (
						<Text style={[styles.em, styles.textLight]}>Windows</Text>
					)}
				</Text>

				{/* VERSION */}
				<Text style={[styles.strong, styles.textDanger]}>
					Version:{'   '}
					<Text style={[styles.em, styles.textLight]}>{Platform.Version}</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	justifyAround: {
		justifyContent: 'space-around',
	},
	h2: {
		fontSize: 24,
		textTransform: 'capitalize',
		color: config.colors.gold,
	},
	strong: {
		fontWeight: 'bold',
	},
	em: {
		fontStyle: 'italic',
	},
	textLight: {
		color: config.colors.white,
	},
	textDanger: {
		color: config.colors.red,
	},

	// FOOTER
	footer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		//backgroundColor: 'purple',
	},
});
