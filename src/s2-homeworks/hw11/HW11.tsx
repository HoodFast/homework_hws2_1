import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0, 100]))

    const change = (event: any, value: any, activeThumb: number) => {
        if (event.target.name === 'hw11-single-slider' ) {
            setValue1(value)
            setValue2([value,value2[1]] )
        } else {
            setValue2(value)
        }
        // const minDistance = 5
        // if (activeThumb === 0) {
        //     setValue2([Math.min(value[0], value2[1] - minDistance), value2[1]]);
        // } else {
        //     setValue2([value2[0], Math.max(value[1], value2[0] + minDistance)]);
        // }


        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}
                            name={'hw11-single-slider'}
                            // сделать так чтоб value1 изменялось // пишет студент

                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={value2}
                            onChange={change}
                            name={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент

                        />
                        <span id={'hw11-value-2'} className={s.number}>{`${value2[0]} - ${value2[1]}`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
