#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# flake8: noqa
from __future__ import print_function

import io
from os import path

from setuptools import setup


here = path.abspath(path.dirname(__file__))


def read(*names, **kwargs):
    return io.open(path.join(here, *names), encoding=kwargs.get("encoding", "utf8")).read()


long_description = read("README.md")
requirements = [r for r in read("requirements.txt").split("\n") if r]
optional_requirements = {}

setup(
    name="COMPAS",
    version="1.17.9",
    description="The COMPAS framework",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="http://compas.dev",
    author="Tom Van Mele",
    author_email="van.mele@arch.ethz.ch",
    license="MIT",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Developers",
        "Topic :: Scientific/Engineering",
        "License :: OSI Approved :: MIT License",
        "Operating System :: Unix",
        "Operating System :: POSIX",
        "Operating System :: Microsoft :: Windows",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: Implementation :: CPython",
    ],
    keywords=["architecture", "engineering", "fabrication", "construction"],
    project_urls={
        "Documentation": "http://compas.dev",
        "Forum": "https://forum.compas-framework.org/",
        "Repository": "https://github.com/compas-dev/compas",
        "Issues": "https://github.com/compas-dev/compas/issues",
    },
    packages=[
        "compas",
        "compas_rhino",
        "compas_blender",
        "compas_ghpython",
        "compas_plotters",
    ],
    package_dir={"": "src"},
    package_data={"compas": ["data/schemas/*.json"]},
    data_files=[],
    include_package_data=True,
    zip_safe=False,
    install_requires=requirements,
    python_requires=">=2.7",
    extras_require={"planarity": ["planarity"], "numba": ["numba"]},
    entry_points={"console_scripts": ["compas_rpc=compas.rpc.__main__:main"]},
    ext_modules=[],
    cmdclass={},
)
