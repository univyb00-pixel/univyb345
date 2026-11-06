import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useAppStore } from '../store/appStore';
import { darkPalette, palette } from '../theme';

export function GradientButton({ label, onPress, style }: { label: string; onPress: () => void; style?: StyleProp<ViewStyle> }) {
  return <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={style}><LinearGradient colors={[palette.purple, palette.pink]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradientButton}><Text style={styles.gradientText}>{label}</Text></LinearGradient></TouchableOpacity>;
}
export function Badge({ label }: { label: string }) {
  const dark = useAppStore((s) => s.darkMode); const colors = dark ? darkPalette : palette;
  return <View style={[styles.badge, { backgroundColor: dark ? '#352F59' : '#EEEAFE' }]}><Ionicons name="shield-checkmark" size={13} color={palette.purple}/><Text style={[styles.badgeText, { color: colors.purple }]}>{label}</Text></View>;
}
export function ScreenTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  const dark = useAppStore((s) => s.darkMode); const colors = dark ? darkPalette : palette;
  return <View style={styles.title}><Text style={[styles.titleText, { color: colors.ink }]}>{title}</Text>{subtitle ? <Text style={[styles.subtitle, { color: colors.muted }]}>{subtitle}</Text> : null}</View>;
}
const styles = StyleSheet.create({
  gradientButton: { height: 52, borderRadius: 16, alignItems: 'center', justifyContent: 'center', shadowColor: palette.purple, shadowOpacity: .25, shadowRadius: 12, elevation: 4 }, gradientText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 4, borderRadius: 99, paddingHorizontal: 9, paddingVertical: 5 }, badgeText: { fontSize: 12, fontWeight: '800' },
  title: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 14 }, titleText: { fontSize: 30, fontWeight: '900', letterSpacing: -.7 }, subtitle: { marginTop: 4, fontSize: 15 },
});
