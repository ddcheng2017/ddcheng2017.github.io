# window常见软件问题

## IDM激活

使用powershell 运行命令 

``` bash
irm https://massgrave.dev/ias | iex
```

根据提示按`2` 在按 `9`即可


## sourceTree 打开闪退

C:\Users\用户名\AppData\Local\Atlassian

找到下面 SourceTree_XXX 文件删除即可


## git 忽略大小写

1. 首先，在项目根目录设置 Git 配置，让它区分大小写：

```bash
git config core.ignorecase false
```

2. 如果文件已经在 Git 中，需要先删除然后重新添加（以正确的大小写）：

```bash
# 先从 Git 中删除文件（但保留本地文件）
git rm --cached "path/to/file.vue"

# 然后重新添加（使用正确的大小写）
git add "path/to/File.vue"

# 提交更改
git commit -m "fix: correct case sensitivity in filenames"
```

3. 如果有多个文件需要修改，可以这样操作：

```bash
# 先移除所有文件
git rm -r --cached .

# 重新添加所有文件
git add .

# 提交更改
git commit -m "fix: correct case sensitivity in filenames"
```


4. 为了确保团队所有成员都使用相同的设置，建议在项目中添加 `.gitconfig` 文件：

```ini:.gitconfig
[core]
    ignorecase = false
```

5. 同时在 `.gitattributes` 文件中添加：

```text:.gitattributes
* text=auto
*.vue text eol=lf
```
