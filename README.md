# Презентация «Знакомство с фаззерами»

[Описание доклада на сайте конференции Joker 2023](https://jokerconf.com/talks/ce07d4b983c14b4abbf7f0976e02cfcd/?referer=/schedule/days/)

Этот проект используется в материалах самой презентации. В папке [src](src/main/kotlin/me/markoutte/joker) лежат исходные коды, сама презентация, написанная с использованием [Code Surfer](https://codesurfer.pomb.us) находится в папке [presentation](presentation).

## Запуск примеров из IntellijIDEA Community

В репозитории подготовлены конфигурации для запуска в IntellijIDEA Community:

- **TimSort** запускает фаззер для тестирования метода [`TimSort#timsort`](src/main/java/me/markoutte/examples/TimSort.java) взятого из проекта [sorting-algorithms](https://github.com/argonautica/sorting-algorithms).
- **Rotate** запускает фаззер для метода `com.google.common.primitives.Ints#rotate(int[], int, int, int)` из проекта [guava](https://github.com/google/guava). Фаззер запускается с использованием [lib/guava-32.1.1-jre.jar](lib/guava-32.1.1-jre.jar) в качестве classpath.
- **Parse Step 1**, **Parse Step 2**, **Parse Step 3**, **Parse** запускает фаззер для метода `com.alibaba.fastjson2.JSON#parse(java.lang.String)` из проекта [fastjson2](https://github.com/alibaba/fastjson2) с использованием [lib/fastjson2-2.0.38.jar](lib/fastjson2-2.0.38.jar) в качестве classpath.

Все файлы репортов сохраняются в корне проекта.

## Запуск примеров из консоли

Запустите команду для сборки jar-файлов для запуска.

```shell
gradle jar
```

После этого в папке `lib/builds` можно будет найти следующие файлы:

- `fuzzer-timsort.jar` для запуска примера с `TimSort#timSort`.
- `fuzzer-rotate.jar` для запуска примера с `Ints#rotate`.
- `fuzzer-parse-step1.jar` для запуска примера с `JSON#parse` со случайной генерацией строк.
- `fuzzer-parse-step2.jar` для запуска примера с `JSON#parse` с использованием мутаций над строками, которые не приводят к ошибкам.
- `fuzzer-parse-step3.jar` для запуска примера с `JSON#parse` с использованием мутаций и инструментацией кода.
- `fuzzer-parse.jar` для запуска примера с `JSON#parse` с использованием мутаций и инструментацией кода, а также заранее подготовленной захардкоженной строке в формате json.

Для запуска из консоли нужно выполнить команду в таком виде:

```shell
java -jar build/libs/fuzzer-parse-step3.jar -c com.alibaba.fastjson2.JSON -m parse(java.lang.String) -cp lib/fastjson2-2.0.38.jar
```

Где `-c` тестируемый класс, `-m` целевой тестируемый метод `-cp` classpath, содержащий тестируемый класс.

## Просмотр презентации

Для просмотра презентации из директории [presentation](presentation) выполните следующие команды:

```shell
npm install
npm start
```

После чего презентация откроется в браузере по адресу [localhost:8000](http://localhost:8000/). Управление презентацией описано на странице проекта [mdx-deck#keyboard-shortcuts](https://github.com/jxnblk/mdx-deck#keyboard-shortcuts).