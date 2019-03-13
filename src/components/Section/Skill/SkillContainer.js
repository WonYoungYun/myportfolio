import React, { Component } from 'react';
import SkillPresenter from './SkillPresenter';


class SkillContainer extends Component {
    state = {
        data: [
            {
                skill: "html",
                img: "",
                lv: 3,
                txt: "프론트엔드의 기본 1, 웹표준을 공부하였습니다."
            },
            {
                skill: "css",
                img: "",
                lv: 3,
                txt: "프론트엔드의 기본 2"
            },
            {
                skill: "js",
                img: "",
                lv: 3,
                txt: "프론트엔드의 기본3"
            },
            {
                skill: "jquery",
                img: "",
                lv: 2,
                txt: "강력한 셀렉터가 좋습니다."
            },
            {
                skill: "react",
                img: "",
                lv: 2,
                txt: "좋은리엑트"
            },
            {
                skill: "vue",
                img: "",
                lv: 2,
                txt: "Vuex, vue-router등 공부하였습니다."
            },
            {
                skill: "node",
                img: "",
                lv: 2,
                txt: "JS의 필수 노드"
            },
            {
                skill: "mongoDB",
                img: "",
                lv: 2,
                txt: "공부"
            }, {
                skill: "git",
                img: "",
                lv: 2,
                txt: "커밋하고 공부"
            },
        ]
    }

    render() {
        const { data } = this.state;
        return <SkillPresenter data={data} />
    }
}

export default SkillContainer;