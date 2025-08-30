---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Flux"
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
  - title: 🔄
    details: 支持 TCP 和 UDP 协议的转发，满足各种网络代理需求
  - title: 👩🏻‍🎓
    details: 支持按隧道账号级别管理流量转发数量，可用于用户/隧道配额控制
  - title: 🚀
    details: 支持端口转发与隧道转发两种模式，灵活适配不同场景
  - title: ⚡
    details: 可针对指定用户的指定隧道进行限速设置，提供精准的流量控制
  - title: 🔔
    details: 支持配置单向或双向流量计费方式，灵活适配不同计费模型
  - title: 🔒
    details: 内置轻量级 Agent 端 API 服务，强制启用自签发 SSL，安全可控
  - title: 📊
    details: 提供实时的流量统计和监控功能，让您随时掌握服务状态
  - title: 🐋
    details: 支持 Docker Compose 一键部署，简化安装和维护流程
