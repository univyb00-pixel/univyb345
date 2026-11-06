import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GradientButton } from '../components/UI';
import { useAppStore } from '../store/appStore';
import { palette } from '../theme';

export function AuthScreen() {
  const signIn = useAppStore((s) => s.signIn); const [email, setEmail] = useState('maya@student.university.edu'); const [sent, setSent] = useState(false);
  const continueFlow = () => { setSent(true); setTimeout(signIn, 450); };
  return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.root}>
    <LinearGradient colors={[palette.purple, palette.pink]} style={styles.hero}><View style={styles.logo}><Ionicons name="sparkles" size={28} color="#fff"/></View><Text style={styles.brand}>Campus Connect</Text><Text style={styles.tagline}>Your campus. Your people.</Text></LinearGradient>
    <View style={styles.card}><Text style={styles.title}>Welcome to campus</Text><Text style={styles.sub}>Use your university email to join a trusted student community.</Text>
      <Text style={styles.label}>University email</Text><View style={styles.inputWrap}><Ionicons name="mail-outline" size={20} color={palette.muted}/><TextInput value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" style={styles.input}/></View>
      <GradientButton label={sent ? 'Opening your campus…' : 'Continue with email'} onPress={continueFlow}/>
      <View style={styles.secure}><Ionicons name="lock-closed" size={16} color="#43A57A"/><Text style={styles.secureText}>We’ll send a secure verification link</Text></View>
    </View>
  </KeyboardAvoidingView>;
}
const styles = StyleSheet.create({ root:{flex:1,backgroundColor:'#F7F7FB'}, hero:{height:'43%',paddingTop:72,paddingHorizontal:24,alignItems:'center'}, logo:{width:56,height:56,borderRadius:18,backgroundColor:'rgba(255,255,255,.18)',alignItems:'center',justifyContent:'center',marginBottom:12}, brand:{color:'#fff',fontSize:30,fontWeight:'900'}, tagline:{color:'rgba(255,255,255,.88)',fontSize:16,marginTop:6}, card:{marginTop:-34,marginHorizontal:18,backgroundColor:'#fff',borderRadius:24,padding:22,shadowColor:'#2B2451',shadowOpacity:.12,shadowRadius:24,elevation:8}, title:{fontSize:24,fontWeight:'900',color:palette.ink}, sub:{fontSize:14,color:palette.muted,lineHeight:21,marginTop:6,marginBottom:24}, label:{fontSize:13,fontWeight:'700',color:palette.ink,marginBottom:8}, inputWrap:{height:52,borderWidth:1,borderColor:palette.line,borderRadius:14,flexDirection:'row',alignItems:'center',paddingHorizontal:14,gap:9,marginBottom:16}, input:{flex:1,color:palette.ink,fontSize:15}, secure:{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:6,marginTop:18}, secureText:{fontSize:12,color:palette.muted} });
