# 数据库迁移脚本使用说明

## 环境配置

在运行迁移脚本之前，需要配置数据库连接信息。创建 `.env` 文件并添加以下配置：

```bash
# Database Configuration
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER_NAME=root
MYSQL_PASSWORD=123456
MYSQL_DATABASE=user_manager
MYSQL_MAX_CONNECTIONS=50

# Node Environment
NODE_ENV=development
```

## 运行迁移脚本

### 1. 运行所有迁移
```bash
pnpm migrate
```

### 2. 查看迁移状态
```bash
pnpm migrate:status
```

### 3. 回滚最后一个迁移
```bash
pnpm migrate:undo
```

### 4. 回滚所有迁移
```bash
pnpm migrate:undo:all
```

### 5. 运行种子数据
```bash
pnpm seed
```

### 6. 回滚种子数据
```bash
pnpm seed:undo
```

## 使用 Docker 运行

如果你的数据库是通过 Docker 运行的，确保数据库服务已经启动：

```bash
# 启动数据库服务
docker-compose up mysql -d

# 然后运行迁移
pnpm migrate
```

## 注意事项

1. 确保 MySQL 数据库服务正在运行
2. 确保数据库 `user_manager` 已经创建
3. 确保数据库用户有足够的权限执行迁移操作
4. 在生产环境中，请使用适当的环境变量配置

## 迁移文件说明

- 迁移文件位于 `src/migrations/` 目录
- 每个迁移文件包含 `up` 和 `down` 方法
- `up` 方法用于执行迁移
- `down` 方法用于回滚迁移 