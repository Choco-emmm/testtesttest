# Agents.md — 项目概览

本文档用于帮助 Agent（如 Qgents 编排助手）快速理解本工作区（仓库）的整体结构与各子仓库职责。

## 项目概览

本工作区是 Qgents 的 fixture 工作区，包含两个子仓库：

- **repo-1**：Qgents 的 fixture 仓库，用于 Worker、Diff、Commit、Push、MR_FIRST 等交付链路的基础校验。仓库中包含测试用的静态文件与一套 PowerShell 校验脚本，是各项基础检查的核心载体。
- **repo-2**：后台组协作相关的示例代码仓库，包含若干说明文档与一个示例 JS 文件，用于演示后台团队协作与 Git push 场景。

## 目录结构

```text
agents.md                          # 本文档：项目整体结构与仓库职责说明
repo-1/
├── README.md                      # repo-1 说明文档（含 Basic check 说明）
├── hello.txt                      # 校验目标文件，内容必须为 hello qgents
├── config/
│   └── test-config.json           # fixture 配置文件（name/version/enabled）
└── scripts/
    └── check.ps1                  # 基础校验脚本（PowerShell）
repo-2/
├── README.txt                     # 后台组合作说明文档
├── READMETOO.txt                  # 补充说明文档
└── app.js                         # 后台组协作示例代码（Git push 测试）
```

## 关键文件说明

### repo-1（Qgents fixture 仓库）

| 文件 | 说明 |
| --- | --- |
| `repo-1/README.md` | 仓库说明，标注该仓库用于 Qgents Worker/Diff/Commit/Push/MR_FIRST 交付测试；包含 Basic check 章节，声明 `hello.txt` 必须包含 `hello qgents`。 |
| `repo-1/hello.txt` | **内容必须为 `hello qgents`**（不允许改动），是校验脚本的核心断言目标。 |
| `repo-1/config/test-config.json` | fixture 配置文件，包含 `name`、`version`、`enabled` 字段；`enabled` 必须为 `true` 才能通过校验。 |
| `repo-1/scripts/check.ps1` | PowerShell 校验脚本，检查逻辑如下：<br>1. 读取 `hello.txt`，去除首尾空白后必须等于 `hello qgents`，否则抛出 `hello.txt content check failed`；<br>2. 读取 `config/test-config.json`（JSON），`enabled` 字段必须为 `true`，否则抛出 `test-config.json enabled check failed`；<br>3. 全部通过时输出 `fixture checks passed`。 |

### repo-2（后台组协作示例仓库）

| 文件 | 说明 |
| --- | --- |
| `repo-2/README.txt` | 后台组最初一次合作的说明文档。 |
| `repo-2/READMETOO.txt` | 补充说明文档。 |
| `repo-2/app.js` | 后台组协作示例代码，包含 `sbdhx`、`dhxbaby` 等函数与 `Git push test` 控制台输出，用于 Git push 场景演示。 |

## 基础验证命令

运行 repo-1 的基础校验脚本（PowerShell）：

```powershell
powershell -ExecutionPolicy Bypass -File repo-1/scripts/check.ps1
```

预期输出：

```text
fixture checks passed
```

校验要点：

- `repo-1/hello.txt` 内容必须为 `hello qgents`；
- `repo-1/config/test-config.json` 中 `enabled` 必须为 `true`。

## 注意事项

- 对 repo-1 的任何修改都不得改变 `hello.txt` 的内容（必须保持 `hello qgents`），否则基础校验将失败。
- 修改 `repo-1/config/test-config.json` 的 `version` 等字段时，需确保 `enabled` 仍为 `true`。
- 最终 Diff 应只包含预期文件，避免误改现有 fixture 文件。
