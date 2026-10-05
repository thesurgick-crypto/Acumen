import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function getProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const profile = await getProfile(cred.user.uid);
  if (!profile || profile.active === false) {
    await signOut(auth);
    throw new Error(profile ? "disabled" : "no-profile");
  }
  return profile;
}

export function logout() {
  return signOut(auth).then(() => (location.href = "index.html"));
}

// Protected page e eta call korle login na thakle login page e pathabe
export function requireAuth(onReady) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return (location.href = "index.html");
    const profile = await getProfile(user.uid);
    if (!profile || profile.active === false) return logout();
    onReady(user, profile);
  });
}

export function friendlyError(e) {
  if (e.message === "disabled") return "Ei account bondho kora ache. Admin ke jane.";
  if (e.message === "no-profile") return "Ei account e role set kora nei. Admin ke jane.";
  if (["auth/invalid-credential", "auth/wrong-password", "auth/user-not-found", "auth/invalid-email"].includes(e.code))
    return "Email ba password thik nai.";
  if (e.code === "auth/too-many-requests") return "Onek beshi chesta hoyeche. Kichukkhon pore try korun.";
  if (e.code === "auth/network-request-failed") return "Internet connection check korun.";
  return "Login kora gelo na. Abar try korun.";
}
