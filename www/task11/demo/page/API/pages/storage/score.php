var score = [
        // 职业推荐分数计算表
        // 1css 2js 3android 4ios 5java 6op 7pm 8ui  id需与后台数据对上号
            {
                option: [
                    {1: 10, 2: 10, 3: -50, 4: -50, 5: -100, 6: -50, 7: 30, 8: 50, name: '初中以下'},
                    {1: 20, 2: 20, 3: 0, 4: 0, 5: -50, 6: 10, 7: 30, 8: 50, name: '高中'},
                    {1: 30, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, name: '大专'},
                    {1: 30, 2: 30, 3: 40, 4: 40, 5: 40, 6: 40, 7: 40, 8: 40, name: '本科', select: true},
                    {1: 30, 2: 30, 3: 50, 4: 50, 5: 50, 6: 50, 7: 50, 8: 50, name: '硕士'},
                    {1: 50, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 50, 8: 50, name: '博士'}
                ],
                name: '学　　历：'
            },
            {
                option: [
                    {1: 50, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 50, 8: 50, name: '男', select: true},
                    {1: 50, 2: 50, 3: 30, 4: 30, 5: 10, 6: -30, 7: 50, 8: 50, name: '女'}
                ],
                name: '性　　别：'
            },
            {
                option: [
                    {1: 5, 2: 5, 3: 0, 4: 0, 5: -50, 6: 15, 7: 20, 8: 30, name: '18岁以下'},
                    {1: 20, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20, 7: 20, 8: 20, name: '18~24岁'},
                    {1: 20, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20, 7: 20, 8: 20, name: '25~30岁', select: true},
                    {1: 10, 2: 10, 3: 10, 4: 10, 5: 0, 6: 10, 7: 40, 8: 0, name: '30岁以上'}
                ],
                name: '年　　龄：'
            },
            {
                option: [
                    {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 10, 8: 20, name: '零基础', select: true},
                    {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 50, name: '绘画基础'},
                    {1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 50, 7: 0, 8: 0, name: '网络相关'},
                    {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 50, name: '原型设计'}
                ],
                name: '基　　础：'
            },
            {
                option: [
                    {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 10, 8: 20, name: '无专业'},
                    {1: 40, 2: 40, 3: 40, 4: 40, 5: 50, 6: 40, 7: 40, 8: 40, name: '计算机相关'},
                    {1: 30, 2: 30, 3: 35, 4: 35, 5: 40, 6: 30, 7: 30, 8: 30, name: '理工科', select: true},
                    {1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10, 7: 50, 8: 50, name: '文科'}
                ],
                name: '专　　业：'
            },
            {
                option: [
                    {1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10, 7: 50, 8: 50, name: '渣渣'},
                    {1: 30, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, name: '普通', select: true},
                    {1: 40, 2: 40, 3: 40, 4: 40, 5: 50, 6: 40, 7: 30, 8: 30, name: '卓越'}
                ],
                name: '逻　　辑：'
            }
        ];