# Создание компонента, аргументы: тип компонента, название компонента

TEST_CODE="import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import $2 from './$2.jsx';

describe('$2', () => {
    test('test $2', () => {
        render(
            <MemoryRouter>
                <$2 />
            </MemoryRouter>
        );

        expect(screen.getByRole('$2')).toBeInTheDocument();
    });
});"

if [ $# -ne 2 ]; then
    echo "Ошибка: требуется 2 аргумента"
    echo "Использование: $0 <категория> <название_компонента>"
    exit 1
fi

if [ ! -e "src/$1" ]; then
    mkdir "src/$1"
    echo "Созадна директория /src/$1"
fi

if [ -e "src/$1/$2" ]; then
    echo "src/$1/$2 уже существует"
    if [ ! -e "src/$1/$2/$2.jsx" ]; then
        touch "src/$1/$2/$2.jsx"
        echo "создан src/$1/$2/$2.jsx"
    else
        echo "src/$1/$2/$2.jsx уже существует"
    fi
    if [ ! -e "src/$1/$2/$2.test.jsx" ]; then
        touch "src/$1/$2/$2.test.jsx"
        echo "$TEST_CODE" > "src/$1/$2/$2.test.jsx"
        echo "создан src/$1/$2/$2.test.jsx"
    else
        echo "src/$1/$2/$2.test.jsx уже существует"
    fi
    exit 0
fi

if [ -e "src/$1" ]; then
    mkdir "src/$1/$2"
    touch "src/$1/$2/$2.jsx"
    touch "src/$1/$2/$2.test.jsx"
    echo "$TEST_CODE" > "src/$1/$2/$2.test.jsx"
fi

