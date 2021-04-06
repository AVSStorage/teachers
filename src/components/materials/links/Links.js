
import MaterialMenu from '../../widgets/MaterialMenu'
import LinkGrid from './LinkGrid'
import { Fragment } from 'react';
import TagInput from '../../TagInput';
import LinkModal from './LinkModal';

function Links() {
    const links = [
        {
            id: 1,
            name: 'Yandex',
            href: 'www.yandex.ru',
            image: 'file_example.png'
        },
        {
            id: 2,
            name: 'Wikipedia',
            href: 'ru.wikipedia.org',
            image: 'file_example.png'
        }
    ]
    return (
        <Fragment>
            <MaterialMenu/>
            <TagInput tags={['Файлы','История','Алгебра']}/>
            <div className="d-flex mt-8 flex-column">
                <h2 className="material__title">Ссылки</h2>
                <LinkGrid links={links} grid={3}/>
            </div>
            <LinkModal/>
        </Fragment>
    )
}

export default Links;