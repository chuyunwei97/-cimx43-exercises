$(function(){
    var book_data = [];
    var  book_data=[
        {
            img: "",
            num: 1,
            text: [
                "Gitanjali is a collection of poems by the Bengali poet Rabindranath Tagore. Tagore received the Nobel Prize for Literature, largely for the English translation, Song Offerings. It is part of the UNESCO Collection of Representative Works. Its central theme is devotion, and its motto is 'I am here to sing thee songs'.",
            ],
            title: "",
            type: 1
        },{
            img: "images/page_L2.jpg",
            num: 0,
            text: [],
            title: "Chapter 1",
            type: 2
        }
        ,{
            img: "",
            num: 0,
            text: ["Give me the strength lightly to bear my joys and sorrows.", "Give me the strength to make my love fruitful in service.", "Give me the strength never to disown the poor or bend my knees before insolent might.", "Give me the strength to raise my mind high above daily trifles.", "And give me the strength to surrender my strength to thy will with love."
            ],
            title: "",
            type: 1
        },{
            img: "images/page_L3.jpg",
            num: 1,
            title: "Chapter 2",
            text: [],
            type: 2
        },{
            img: "images/page_L4.jpg",
            num: 1,
            title: "",
            text: ["If the day is done, if birds sing no more, if the wind has flagged tired, then draw the veil of darkness thick upon me, even as thou hast wrapt the earth with the coverlet of sleep and tenderly closed the petals of the drooping lotus at dusk.", "From the traveller, whose sack of provisions is empty before the voyage is ended, whose garment is torn and dustladen, whose strength is exhausted, remove shame and poverty, and renew his life like a flower under the cover of thy kindly night."],
            type: 1
        },{
            img: "images/page_L5.jpg",
            num: 2,
            title: "Chapter 3",
            text: [],
            type: 2
        },{
            img: "images/page_L6.jpg",
            num: 2,
            title: "",
            text: [ "I know that the day will come when my sight of this earth shall be lost, and life will take its leave in silence, drawing the last curtain over my eyes.", "Yet stars will watch at night, and morning rise as before, and hours heave like sea waves casting up pleasures and pains.", "Early in the day it was whispered that we should sail in a boat, only thou and I, and never a soul in the world would know of this our pilgrimage to no country and to no end."
            ],
            type: 1
        },{
            img: "images/page_L7.jpg",
            num: 3,
            title: "Chapter 4",
            text: [],
            type: 2
        },{
            img: "images/page_L5.jpg",
            num: 3,
            title: "",
            text: [ "When I think of this end of my moments, the barrier of the moments breaks and I see by the light of death thy world with its careless treasures. Rare is its lowliest seat, rare is its meanest of lives.", "Things that I longed for in vain and things that I got---let them pass. Let me but truly possess the things that I ever spurned and overlooked.", "In the meanwhile I smile and I sing all alone. In the meanwhile the air is filling with the perfume of promise."
            ],
            type: 1
        },{
            img: "images/page_L4.jpg",
            num: 3,
            title: "Chapter 5",
            text: [],
            type: 2
        },{
            img: "images/page_L5.jpg",
            num: 3,
            title: "",
            text: [ "I have had my invitation to this world's festival, and thus my life has been blessed. ", "The time that my journey takes is long and the way of it long.", "I came out on the chariot of the first gleam of light, and pursued my voyage through the wildernesses of worlds leaving my track on many a star and planet."
            ],
            type: 1
        },
    ];
    creat_html(book_data)

    function creat_html(data,num){

        $('.flipbook').html('');
        var b_ok = true,
            b_num = 0;
        var html ='';

        for(var i=0; i<data.length; i++){
            if(b_ok){
                var type = data[i].type,
                    p_text = data[i].text,
                    page_html = '',
                    title = data[i].title,
                    isImg = data[i].isimg;

                var isshow = 'block';

                if(i == data.length -1){
                    isshow = 'none';

                }
                if(type == 1){
                    var pic_html = '<div class="book_pic"><p>Gitanjali - Rabindranath Tagore</p></div>',
                        pH = '',
                        pImg = '';

                    if(isImg){
                        pImg = '<img style="margin-bottom:25px;" src="'+isImg+'"/>'
                    }

                    for(var j=0; j<p_text.length; j++){
                        var p_arr = [],
                            arr_html = '';
                        if(p_text[j].indexOf('@') > 0){
                            p_arr = p_text[j].split('@');
                            for(var k=0; k<p_arr.length; k++){
                                arr_html+=p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">'+arr_html+'</p>'
                        }else{
                            pH += '<p class="text_pl">'+p_text[j]+'</p>'
                        }
                    }

                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        pic_html+
                        pImg+
                        pH+
                        '</div>' +
                        '<p class="next_page" style="display:'+isshow+'">下一页</p>' +
                        '</div>'
                }

                if(type == 2){
                    var page_html = '';

                    page_html += '<div class="page_L1 cover"><img src="'+data[i].img+'" alt="">' +
                        '<p class="w_title">'+title+'</p>' +
                        '<p class="pre_page">上一页</p> ' +
                        '</div>'
                }

                if(type == 3){
                    var pic_html = '<div class="book_pic"><p>Gitanjali - Rabindranath Tagore</p></div>',
                        pH = '',
                        pImg = '';

                    if(isImg){
                        pImg = '<a target="_blank"><img src="'+isImg+'"/></a>'
                    }

                    for(var j=0; j<p_text.length; j++){
                        var p_arr = [],
                            arr_html = '';
                        if(p_text[j].indexOf('@') > 0){
                            p_arr = p_text[j].split('@');
                            for(var k=0; k<p_arr.length; k++){
                                arr_html+=p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">'+arr_html+'</p>'
                        }else{
                            pH += '<p class="text_pl">'+p_text[j]+'</p>'
                        }
                    }


                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        pH+
                        pImg+
                        '</div>' +
                        '<p class="next_page" style="display:'+isshow+'">下一页</p>' +
                        '</div>'
                }
                html+=page_html;
            }
        }
        if(b_ok){
            $('.flipbook').append(html);
            var turnWidth = $('#cover').outerWidth(),
                turnHeight = $('#cover').outerHeight();

            $('.flipbook').turn({
                width: turnWidth*2+20,
                height: turnHeight,
                elevation: 50,
                gradients: true,
                autoCenter: true,
                display:'double',
                when: { turning: function(event, page, pageObject) {

                    } }
            });

            $('.bookmark').on('click','li',function(){
                var self = $(this),
                    id = self.attr('data-id');
                $('.flipbook').turn('page', id);
            })

            $('.back_catalog').click(function(){
                $('.flipbook').turn('page', 1);
            })
        }

    }
})