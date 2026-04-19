# Proof of Trust

Plateforme d'avis blockchain avec Speech-to-Text, construite sur Internet Computer Protocol (ICP).

## Vue d'ensemble

Proof of Trust est une plateforme d'avis immuables où :
- Les utilisateurs peuvent soumettre des avis en parlant à leur ordinateur ou téléphone
- Les avis sont transcrits automatiquement via Web Speech API
- Tous les avis sont stockés immuablement sur la blockchain ICP
- Aucune censure ou modification d'avis possible après soumission

## Architecture

### Backend (Motoko)
- Canister Motoko implémentant la logique métier
- Stockage immuable des avis
- Fonctions de requête pour récupérer les avis

**Fichiers:**
- `backend/src/main.mo` - Smart contract principal
- `backend/src/main.did` - Interface Candid

### Frontend (React)
- Interface utilisateur moderne et réactive
- Web Speech API pour capture vocale
- Formulaire pour compléter les informations d'avis
- Liste d'avis avec notation

**Fichiers:**
- `frontend/src/App.tsx` - Composant principal
- `frontend/src/VoiceInput.tsx` - Capture vocale
- `frontend/src/ReviewForm.tsx` - Formulaire d'avis
- `frontend/src/ReviewList.tsx` - Affichage des avis
- `frontend/src/App.css` - Styles

## Installation

### Prérequis
- Node.js v20+
- Git
- Gitpod (recommandé pour éviter l'installation locale)

### Démarrer le serveur local

```bash
# Démarrer le replica ICP local
dfx start

# Dans un autre terminal, déployer les canisters
dfx deploy

# Le frontend sera disponible sur http://localhost:4943
```

## Utilisation

1. **Enregistrez votre avis vocalement:**
   - Cliquez sur "Commencer"
   - Parlez votre avis (configuré pour le français)
   - Le texte s'affiche en temps réel

2. **Complétez le formulaire:**
   - Titre de l'avis
   - Note (1-5 étoiles)
   - Contenu (pré-rempli par le texte vocal)

3. **Soumettez:**
   - Cliquez "Soumettre l'avis"
   - L'avis est enregistré immuablement sur ICP

4. **Consultez les avis:**
   - Tous les avis sont visibles dans la liste
   - Affichage du titre, note, contenu, date et auteur

## Technologies

- **ICP (Internet Computer)** - Blockchain infrastructure
- **Motoko** - Smart contract language
- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Web Speech API** - Speech-to-text natif du navigateur
- **Internet Identity** - Authentication (futur)

## Prochaines étapes

- [ ] Intégrer Internet Identity pour l'authentification
- [ ] Ajouter modération avec votes communautaires
- [ ] Filtrer par entreprise/produit
- [ ] Statistiques d'avis
- [ ] Support multilingue complet

## Licence

MIT

## Contact

Adrien Bock - adrienbock@me.com
