#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const projectDir = 'c:\\Users\\madzh\\Desktop\\Interior Design';

console.log('🚀 Deploying Design Studio to Vercel...\n');

try {
  // Change to project directory
  process.chdir(projectDir);

  // Stage files
  console.log('📦 Staging files...');
  execSync('git add vercel.json server/vercel.json DEPLOY_VERCEL.md deploy-vercel.bat');

  // Commit
  console.log('💾 Committing changes...');
  execSync('git commit -m "Add Vercel deployment configuration - ready to deploy"');

  // Push
  console.log('📤 Pushing to GitHub...');
  execSync('git push');

  console.log('\n✅ SUCCESS! Files pushed to GitHub\n');
  console.log('📋 Next Steps:\n');
  console.log('1. Visit: https://vercel.com/dashboard');
  console.log('2. Click "Add New Project"');
  console.log('3. Import Git Repository: CluTchE3/Interior-Designer-Project-');
  console.log('4. Configure:');
  console.log('   - Framework: Create React App (for client)');
  console.log('   - Root Directory: client');
  console.log('   - Build Command: npm run build');
  console.log('   - Output Directory: build');
  console.log('5. Deploy!\n');
  console.log('📍 You\'ll get URLs like:');
  console.log('   - Frontend: https://design-studio-[random].vercel.app');
  console.log('   - Backend: https://design-studio-api-[random].vercel.app\n');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
