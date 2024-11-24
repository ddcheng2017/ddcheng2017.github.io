const { execSync } = require('child_process');

// 获取命令行参数，跳过前两个参数（node 和脚本路径）
const commitMessage = process.argv[2];

if (!commitMessage) {
  console.error('请提供提交描述信息！');
  console.log('使用方式: npm run deploy "你的提交描述"');
  process.exit(1);
}

try {
  // 执行 git 命令
  console.log('正在添加文件...');
  execSync('git add .');

  console.log('正在提交更改...');
  execSync(`git commit -m "${commitMessage}"`);

  console.log('正在推送到远程仓库...');
  execSync('git push origin');

  console.log('部署完成！');
} catch (error) {
  console.error('部署过程中出现错误：', error.message);
  process.exit(1);
} 