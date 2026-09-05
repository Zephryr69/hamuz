// Connexion au Google Form (relié au Google Sheets de Mariella) pour la liste privée.
// Google Forms ne renvoie pas de réponse lisible en cross-origin (mode "no-cors"),
// donc on ne peut pas vérifier le succès techniquement — c'est une limitation connue
// de cette méthode, largement utilisée pour poster vers un Google Form sans backend.

const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScTgA0WleNP3OWsZGKfyNDoR633g4fyCUunGcOXm5uxz5JBsw/formResponse";

const ENTRY_PRENOM = "entry.1059931153";
const ENTRY_EMAIL = "entry.1687705700";

export async function submitToPrivateList(prenom: string, email: string): Promise<void> {
  const formData = new URLSearchParams();
  formData.append(ENTRY_PRENOM, prenom);
  formData.append(ENTRY_EMAIL, email);

  await fetch(FORM_ACTION_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });
}
