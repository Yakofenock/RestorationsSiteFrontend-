const MOCK = {
    "draft_id": null,
    "restorations_list": [
        {
            "id": 1,
            "name": "Старый замок",
            "image": "http://example.com/old_castle.jpg",
            "description": "Реставрация старинного замка в средневековом стиле",
            "given_sum": 50000,
            "total_sum": 100000,
            "donaters": [
                {
                    "name": "Петр Иванов",
                    "works": [
                        {
                            "work_id": 1,
                            "work": "Восстановление стен",
                            "given_sum": 25000,
                            "percent": 50
                        }
                    ],
                    "given_sum": 25000,
                    "total_sum": 100000,
                    "percent": 25
                }
            ],
            "works": [
                {
                    "id": 1,
                    "name": "Восстановление стен",
                    "given_sum": 25000,
                    "total_sum": 50000,
                    "status": "InProgress"
                },
                {
                    "id": 2,
                    "name": "Восстановление башни",
                    "given_sum": 25000,
                    "total_sum": 50000,
                    "status": "NotStarted"
                }
            ]
        },
        {
            "id": 2,
            "name": "Исторический музей",
            "image": "http://example.com/historical_museum.jpg",
            "description": "Реставрация исторического музея с уникальными экспонатами",
            "given_sum": 75000,
            "total_sum": 200000,
            "donaters": [],
            "works": [
                {
                    "id": 1,
                    "name": "Восстановление фасада",
                    "given_sum": 50000,
                    "total_sum": 100000,
                    "status": "Completed"
                },
                {
                    "id": 2,
                    "name": "Реставрация картины",
                    "given_sum": 25000,
                    "total_sum": 100000,
                    "status": "InProgress"
                }
            ]
        },
        {
            "id": 3,
            "name": "Древняя церковь",
            "image": "http://example.com/ancient_church.jpg",
            "description": "Реставрация древней церкви с фресками",
            "given_sum": 100000,
            "total_sum": 500000,
            "donaters": [
                {
                    "name": "Мария Сидорова",
                    "works": [
                        {
                            "work_id": 1,
                            "work": "Реставрация фресок",
                            "given_sum": 50000,
                            "percent": 50
                        }
                    ],
                    "given_sum": 50000,
                    "total_sum": 200000,
                    "percent": 25
                },
                {
                    "name": "Алексей Петров",
                    "works": [
                        {
                            "work_id": 2,
                            "work": "Реставрация иконостаса",
                            "given_sum": 50000,
                            "percent": 50
                        }
                    ],
                    "given_sum": 50000,
                    "total_sum": 200000,
                    "percent": 25
                }
            ],
            "works": [
                {
                    "id": 1,
                    "name": "Реставрация фресок",
                    "given_sum": 50000,
                    "total_sum": 100000,
                    "status": "InProgress"
                },
                {
                    "id": 2,
                    "name": "Реставрация иконостаса",
                    "given_sum": 50000,
                    "total_sum": 100000,
                    "status": "NotStarted"
                },
                {
                    "id": 3,
                    "name": "Восстановление колокольни",
                    "given_sum": 0,
                    "total_sum": 300000,
                    "status": "NotStarted"
                }
            ]
        },
        {
            "id": 4,
            "name": "Памятник в парке",
            "image": "http://example.com/park_monument.jpg",
            "description": "Реставрация памятника в городском парке",
            "given_sum": 0,
            "total_sum": 150000,
            "donaters": [],
            "works": [
                {
                    "id": 1,
                    "name": "Очистка от ржавчины",
                    "given_sum": 0,
                    "total_sum": 50000,
                    "status": "NotStarted"
                },
                {
                    "id": 2,
                    "name": "Покраска",
                    "given_sum": 0,
                    "total_sum": 100000,
                    "status": "NotStarted"
                }
            ]
        },
        {
            "id": 5,
            "name": "Подземный город",
            "image": "http://example.com/underground_city.jpg",
            "description": "Реставрация подземного города с катакомбами",
            "given_sum": 25000,
            "total_sum": 200000,
            "donaters": [],
            "works": [
                {
                    "id": 1,
                    "name": "Восстановление подвалов",
                    "given_sum": 15000,
                    "total_sum": 100000,
                    "status": "InProgress"
                },
                {
                    "id": 2,
                    "name": "Исследование катакомб",
                    "given_sum": 10000,
                    "total_sum": 100000,
                    "status": "Completed"
                }
            ]
        }
    ]
}


export default  MOCK;