from setuptools import setup, find_packages

setup(
    name='rcvis',

    version="0.0.1",

    packages=find_packages(),
    include_package_data=True,

    url='https://github.com/artoonie/rcvis',

    install_requires = ['Django>=2.2.2'],
)
