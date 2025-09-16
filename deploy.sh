#!/bin/bash

echo "🚀 Déploiement du portfolio sur GitHub Pages..."

# Vérification que nous sommes sur la branche main
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
    echo "❌ Vous devez être sur la branche main pour déployer"
    exit 1
fi

# Installation des dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Gestion des vulnérabilités de sécurité
echo "🔒 Vérification et correction des vulnérabilités de sécurité..."
npm audit fix --no-audit-level

# Avertissement sur les vulnérabilités critiques
echo "⚠️  Note: Certaines vulnérabilités PDF.js sont acceptables pour un portfolio personnel"
echo "   Les vulnérabilités concernent uniquement l'affichage de PDF et non la sécurité générale"

# Vérification que le build fonctionne
echo "🔨 Test de construction du projet..."
if ! npm run build; then
    echo "❌ Erreur lors de la construction. Vérifiez vos fichiers et réessayez."
    exit 1
fi

echo "✅ Construction réussie !"

# Vérification des changements Git
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Changements détectés. Commit automatique..."
    git add .
    git commit -m "Auto-commit avant déploiement - $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
    echo "✅ Changements sauvegardés sur GitHub"
fi

# Déploiement
echo "📤 Déploiement vers GitHub Pages..."
if ! npm run deploy; then
    echo "❌ Erreur lors du déploiement. Vérifiez votre configuration GitHub Pages."
    exit 1
fi

echo "✅ Déploiement terminé ! Votre site sera disponible dans quelques minutes à :"
echo "🌐 https://yannblanc75.github.io"
echo ""
echo "📋 Prochaines étapes :"
echo "   1. Attendez 2-5 minutes pour la propagation"
echo "   2. Vérifiez que le site fonctionne correctement"
echo "   3. Testez la navigation et les médias"
echo ""
echo "🔧 En cas de problème :"
echo "   - Vérifiez les Actions GitHub sur votre repository"
echo "   - Consultez les paramètres Pages dans GitHub"
echo "   - Videz le cache de votre navigateur"
