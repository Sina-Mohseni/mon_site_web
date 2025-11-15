# 🚀 Guide de Déploiement Anim'Connect

## 📍 Ton problème actuel

Tu vois une erreur MIME car GitHub Pages sert les **fichiers source** au lieu du **build compilé**.

**React/Vite doit être compilé avant déploiement !**

---

## 🎯 2 Options pour utiliser le site

### Option 1 : LOCAL (RECOMMANDÉ pour tester)

```bash
cd /home/user/mon_site_web
npm install
npm run dev
```

✅ Ouvre **http://localhost:3000** dans ton navigateur

---

### Option 2 : EN LIGNE sur GitHub Pages

#### Étape 1 : Activer GitHub Pages

1. Va sur https://github.com/Sina-Mohseni/mon_site_web
2. Clique sur **Settings** (⚙️)
3. Dans le menu gauche, clique sur **Pages**
4. Dans "Build and deployment" :
   - Source : **GitHub Actions** (pas "Deploy from a branch")
5. Clique **Save**

#### Étape 2 : Merger et pusher sur main/master

```bash
# Commit les changements
git add .
git commit -m "Configure GitHub Pages deployment"
git push

# Merge ta branche dans main (ou master)
git checkout main
git merge claude/animconnect-frontend-build-01AdLiTwemeSGGmd4DnzrdEb
git push origin main
```

#### Étape 3 : Vérifier le déploiement

1. Va sur https://github.com/Sina-Mohseni/mon_site_web/actions
2. Tu verras le workflow "Deploy to GitHub Pages" en cours
3. Attends qu'il devienne vert ✅ (2-3 minutes)
4. Le site sera disponible sur :
   - **https://sina-mohseni.github.io/mon_site_web/**

---

## 🔧 Déploiement manuel (alternative)

Si GitHub Actions ne fonctionne pas :

```bash
# Installe gh-pages
npm install --save-dev gh-pages

# Build et déploie
npm run build
npx gh-pages -d dist
```

Le site sera sur : **https://sina-mohseni.github.io/mon_site_web/**

---

## ⚠️ Important

- **Ne vas PAS sur** `https://sina-mohseni.github.io/src/main.jsx`
- **Va sur** `https://sina-mohseni.github.io/mon_site_web/` (avec le build)

---

## 🐛 Si ça ne fonctionne toujours pas

1. Vérifie que GitHub Pages est activé (Settings → Pages)
2. Vérifie que le workflow a réussi (Actions tab)
3. Attends 5 minutes après le déploiement
4. Vide le cache du navigateur (Ctrl + Shift + R)

---

## 💡 Pour développer en local

```bash
npm run dev      # Lance le serveur local
npm run build    # Compile pour production
npm run preview  # Teste le build localement
```
