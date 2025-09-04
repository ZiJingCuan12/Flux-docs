---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MuFVps"
  text: "基于gost的转发面板"
  tagline: 功能强大的流量转发管理平台，支持灵活的流量计费和限速功能 
  image:
    src: /background.svg
    alt: 背景图片
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-start
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - icon: 🔄
    title: 多协议支持
    details: 支持 TCP 和 UDP 协议的转发，满足各种网络代理需求
  
  - icon: 👥
    title: 账号级别管理
    details: 支持按隧道账号级别管理流量转发数量，可用于用户/隧道配额控制
  
  - icon: 🚀
    title: 双模式转发
    details: 支持端口转发与隧道转发两种模式，灵活适配不同场景
  
  - icon: ⚡
    title: 精细化限速
    details: 可针对指定用户的指定隧道进行限速设置，提供精准的流量控制
  
  - icon: 💰
    title: 灵活计费
    details: 支持配置单向或双向流量计费方式，灵活适配不同计费模型
  
  - icon: 🔒
    title: 安全可控
    details: 内置轻量级 Agent 端 API 服务，强制启用自签发 SSL，安全可控
  
  - icon: 📊
    title: 实时监控
    details: 提供实时的流量统计和监控功能，让您随时掌握服务状态
  
  - icon: 🐳
    title: 容器化部署
    details: 支持 Docker Compose 一键部署，简化安装和维护流程
---