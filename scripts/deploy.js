const { execSync } = require('child_process');

// 获取命令行参数
const commitMessage = process.argv[2];

if (!commitMessage) {
  console.error('请提供提交描述信息！');
  console.log('使用方式: npm run deploy "你的提交描述"');
  process.exit(1);
}

try {
  // 先执行构建
  console.log('开始构建...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 如果构建成功，继续执行 git 命令
  console.log('构建成功，开始部署...');
  
  console.log('正在添加文件...');
  execSync('git add .');

  console.log('正在提交更改...');
  execSync(`git commit -m "${commitMessage}"`);

  console.log('正在推送到远程仓库...');
  execSync('git push origin');

  console.log('部署完成！');
} catch (error) {
  // 如果有任何步骤失败，显示错误信息并终止
  console.error('部署失败：', error.message);
  process.exit(1);
} 