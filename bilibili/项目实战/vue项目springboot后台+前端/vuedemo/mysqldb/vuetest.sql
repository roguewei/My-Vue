/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : vuetest

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 22/11/2019 11:53:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `per_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `per_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `parent_id` int(10) DEFAULT NULL,
  `type` int(2) DEFAULT NULL COMMENT '菜单类型（0：导航，1：菜单，2：按钮）',
  `per_icon` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '图标',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES (1, '用户列表', '/user', 6, 1, 'iconfont wgsaccount');
INSERT INTO `permission` VALUES (2, '根据id查询用户', '/user/queryById', 1, 2, 'iconfont wgssearch');
INSERT INTO `permission` VALUES (3, '新增用户', '/user/add', 1, 2, 'iconfont wgsadd');
INSERT INTO `permission` VALUES (4, '修改用户', '/user/update', 1, 2, 'iconfont wgseditor');
INSERT INTO `permission` VALUES (5, '删除用户', '/user/del', 1, 2, 'iconfont wgsreduce-fill');
INSERT INTO `permission` VALUES (6, '系统管理', NULL, 0, 0, 'iconfont wgsset');
INSERT INTO `permission` VALUES (7, '表单管理', NULL, 0, 0, 'iconfont wgscategory');
INSERT INTO `permission` VALUES (8, 'input', '/input', 7, 1, 'iconfont wgscomments');
INSERT INTO `permission` VALUES (9, 'button', '/button', 7, 1, 'iconfont wgsoperation');
INSERT INTO `permission` VALUES (10, '删除input', '/input/del', 8, 2, 'iconfont wgsashbin-fill');
INSERT INTO `permission` VALUES (11, '权限列表', '/permission', 6, 1, 'iconfont wgspassword1');
INSERT INTO `permission` VALUES (12, '角色列表', '/role', 6, 1, 'iconfont wgsfavorites');
INSERT INTO `permission` VALUES (13, '新增权限', '/permission/add', 11, 2, 'iconfont wgsadd');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, '超级管理员');
INSERT INTO `role` VALUES (2, '用户');

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission`  (
  `role_id` int(10) DEFAULT NULL,
  `per_id` int(11) DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_permission
-- ----------------------------
INSERT INTO `role_permission` VALUES (1, 1);
INSERT INTO `role_permission` VALUES (1, 2);
INSERT INTO `role_permission` VALUES (1, 3);
INSERT INTO `role_permission` VALUES (1, 4);
INSERT INTO `role_permission` VALUES (1, 5);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'winston', '111111', 24, '广东省梅州市', 1);
INSERT INTO `user` VALUES (2, 'rogue', '123123', 28, '广东省广州市', 1);
INSERT INTO `user` VALUES (3, 'laogao', '111111', 19, '广东省深圳市', 1);
INSERT INTO `user` VALUES (4, 'aaa', NULL, 55, '威风威风威风', 1);
INSERT INTO `user` VALUES (5, 'sss', NULL, 84, '范文芳问问我', 1);
INSERT INTO `user` VALUES (6, 'www', NULL, 15, '葛条沟和他', 1);
INSERT INTO `user` VALUES (7, 'zz', NULL, 65, '个摊位', 1);
INSERT INTO `user` VALUES (8, 'vgg', NULL, 63, '无色酚翁付无无无无无', 1);
INSERT INTO `user` VALUES (9, 'ttt', NULL, 11, 'sefwefwe', 1);
INSERT INTO `user` VALUES (10, 'ee', NULL, 25, 'qeeeeeeeqeqqqq', 1);
INSERT INTO `user` VALUES (11, 'bnnq', NULL, 29, 'wfzxcfwef', 1);
INSERT INTO `user` VALUES (12, 'test', '123123', 34, '广东梅州测试', 1);
INSERT INTO `user` VALUES (13, 'test2', '123123', 22, '水电费为范围', 1);
INSERT INTO `user` VALUES (14, 'test3', '123123', 21, '市发改委如果我热污染', 1);
INSERT INTO `user` VALUES (15, 'test4', '123123', 19, '如果让他和田玉', 1);
INSERT INTO `user` VALUES (16, 'winston', '123123', 24, '广东省梅州市', 1);
INSERT INTO `user` VALUES (17, 'test5', '1231123', 22, '我我我我我我', 1);
INSERT INTO `user` VALUES (18, 'winston', '123123', 24, '广东省梅州市', 1);
INSERT INTO `user` VALUES (19, 'winston', '123123', 24, '广东省梅州市', 1);

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `user_id` int(10) DEFAULT NULL,
  `role_id` int(10) DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (1, 1);

SET FOREIGN_KEY_CHECKS = 1;
