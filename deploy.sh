#强制推送
#!/usr/bin/env bash

# 出现错误时立即退出shell脚本的执行
set -e

npm run build
cd dist
# 用于防止github pages的jekyll行为
touch .nojekyll
# 在 dist 目录下生成一个新的git 仓库
git init
# 向新的git 仓库中添加内容
git add -A
git commit -m 'deploy'
# 将该git仓库中的内容提交到指定的仓库，并指定具体分支

git push -f "https://github.com/hellosaofei/vue3-admin-demo.git" master:deploy
# 提交结束后，退出dist子目录，返回项目根目录
cd -
# 生成一个新的 bash 窗口
exec /bin/bash