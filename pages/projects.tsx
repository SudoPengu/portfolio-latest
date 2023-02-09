import React from 'react'

import Projects from '@/components/Projects'

type Props = {}

function projects({ }: Props) {
    return (
        <main>
            {/* Body */}
            <div className='sm:w-[35rem] md:w-[38rem] lg:w-[40rem] m-auto'>
                <Projects />
            </div>

        </main>
    )
}

export default projects