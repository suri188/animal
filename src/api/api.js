import http from "../utils/http";
export const getHome = ()=>http("get","/api/v3/index/main.html?do=getDynamicV415&pet_type=dog&version=415&is_single=0&system=wap&isWeb=1")

export const list = ()=>http("get","/api/v3/union/trial/Main.html?page=1&petType=dog&cate=0&system=wap&isWeb=1&version=303&_=1554260453818")

export const lists = ()=>http("get","/api/v3/union/trial/Main.html?page=1&petType=dog&cate=0&system=wap&isWeb=1&version=303&_=1554260453818")