# RAM (Random Access Memory)

Оперативная память (RAM) используется для для временного хранения данных и инструкций, с которыми процессор работает в данный момент. Доступ к данным в оперативной памяти значительно быстрее, чем доступ к данным на жёстком диске или SSD.

## Принцип работы

RAM хранит данные во время работы программы и освобождает их при выключении питания. Любая программа загружается в RAM перед выполнением, чтобы обеспечить быстрый доступ к ее данным и инструкциям процессору.

## Структура

RAM представляет собой непрерывный блок ячеек памяти, где каждая ячейка имеет уникальный адрес и хранит 1 байт данных.

## Взаимодействие C++ с RAM

Когда вы объявляете переменную или создаёте массив в C++, компилятор резервирует для них память в RAM. Для каждой переменной выделяется определённое количество байт в зависимости от её типа (например, 4 байта для `int`). В случае массивов выделяется непрерывный блок памяти, где каждый элемент массива занимает одинаковое количество байт.

### Пример работы с массивом в C++

В этом примере массив целых чисел `arr` хранится в оперативной памяти:

```cpp
int arr[5] = {10, 20, 30, 40, 50};
```

Массив состоит из 5 элементов, каждый из которых — это 4 байта (тип int). Общий объем выделенной памяти для этого массива будет:

```
5 × 4 = 20 байт
```

Каждый элемент массива имеет свой адрес в памяти, начиная с базового адреса, который соответствует первому элементу (arr[0]).

#### Адресация в массиве

Когда вы обращаетесь к элементу массива, C++ использует следующую формулу для вычисления его адреса в оперативной памяти:

```
Адрес элемента = Базовый адрес массива + (i × Размер элемента)
```

- **Базовый адрес массива** — это адрес первого элемента массива `arr[0]`.
- **i** — это индекс элемента массива.
- **Размер элемента** — количество байт, занимаемых каждым элементом (например, для типа `int` это 4 байта).

##### Пример:

Возьмем массив:

```cpp
int arr[3] = {100, 200, 300};
```

Предположим, что базовый адрес arr[0] равен 1000. Тогда:
- **Адрес `arr[0]`** = 1000
- **Адрес `arr[1]`** = 1004
- **Адрес `arr[2]`** = 1008

Это означает, что для доступа к любому элементу массива используется вышеописанная формула, что обеспечивает эффективный доступ к данным в RAM с временной сложностью O(1), так как смещение для любого индекса можно рассчитать напрямую.