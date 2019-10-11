import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'                        //首页
import Form from '@/view/Form'                          //申请表单
import Datacenter from '@/view/Datacenter'              //全渠道数据中心
import Automation from '@/view/Automation'              //营销自动化
import Social from '@/view/Social'                      //社会化营销
import Custom from '@/view/Custom'                      //定制服务
import CRMloyalty from '@/view/CRMloyalty'              //CRM忠诚度
import Email from '@/view/automation/Email'             //邮件营销
import Sms from '@/view/automation/Sms'                 //短信营销
import Wechat from '@/view/automation/Wechat'           //微信营销
import About from '@/view/About'                        //关于我们（公司介绍）
import Industry from '@/view/Industry'                  //行业案例
import CaseContent from '@/view/CaseContent'            //案例详情
import News from '@/view/News'                          //公司新闻
import Client from '@/view/client'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'Index',
        component: Index
        },
        {
            path: '/form',
            name: 'Form',
            component: Form
        },
        {
            path: '/dmartech/datacenter',
            name: 'Datacenter',
            component: Datacenter
        },
        {
            path: '/dmartech/automation',
            name: 'Automation',
            component: Automation
        },
        {
            path: '/dmartech/social',
            name: 'Social',
            component: Social
        },
        {
            path: '/dmartech/service',
            name: 'Custom',
            component: Custom
        },
        {
            path: '/dmartech/crm',
            name: 'CRMloyalty',
            component: CRMloyalty
        },
        {
            path: '/dmartech/automation/email',
            name: 'Email',
            component: Email
        },
        {
            path: '/dmartech/automation/Sms',
            name: 'Sms',
            component: Sms
        },
        {
            path: '/dmartech/automation/wechat',
            name: 'Wechat',
            component: Wechat
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/about/news',
            name: 'News',
            component: News
        },
        {
            path: '/case/industry',
            name: 'Industry',
            component: Industry
        },
        {
            path: '/case/CaseContent',
            name: 'CaseContent',
            component: CaseContent
        },
        {
            path: '/case/client',
            name: 'Client',
            component: Client
        }
    ],
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            return savedPosition
        } else {
            let position = {}
            if (to.hash) {
                position.selector = to.hash
            }else{
                position.x = 0
                position.y = 0
            }
            // 如果meta中有scrollTop
            // if (to.matched.some(m => m.meta.scrollToTop)) {
            //     position.x = 0
            //     position.y = 0
            // }
            return position
        }
    }
})
